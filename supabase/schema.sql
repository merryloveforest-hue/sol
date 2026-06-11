-- 1. Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text not null,
  role text default 'user'::text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by admin."
  on profiles for select
  using ( auth.uid() in (select id from profiles where role = 'admin') );

create policy "Users can view their own profile."
  on profiles for select
  using ( auth.uid() = id );

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$;

-- Trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 2. Create inquiries table
create table public.inquiries (
  id uuid default uuid_generate_v4() primary key,
  user_name text not null,
  user_phone text not null,
  content text not null,
  status text default 'pending'::text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.inquiries enable row level security;

-- Anyone can insert an inquiry (since visitors to the site can leave an inquiry)
create policy "Anyone can insert an inquiry"
  on inquiries for insert
  with check ( true );

-- Only admins can view and update inquiries
create policy "Admins can view inquiries"
  on inquiries for select
  using ( auth.uid() in (select id from profiles where role = 'admin') );

create policy "Admins can update inquiries"
  on inquiries for update
  using ( auth.uid() in (select id from profiles where role = 'admin') );
