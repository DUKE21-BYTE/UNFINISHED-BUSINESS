# Supabase Setup for Unfinished Ideas

## 1. Create a Supabase Project

1. Go to [https://supabase.com/](https://supabase.com/).
2. Click "Start your project" and authenticate.
3. Click "New Project".
4. Choose the appropriate organization asking for a new database.
5. Enter a Name for your database (e.g., "unfinished-ideas").
6. Set a strong password.
7. Select the region closest to you.
8. Click "Create new project".

## 2. Get Your API Keys

Once your project is created:

1. Go to the project dashboard.
2. Click on "Project Settings" (the cog icon at the bottom of the left sidebar).
3. Click on "API".
4. Copy the "Project URL".
5. Copy the "anon" "public" key.

## 3. Create the Database Table

Run the following SQL in the SQL Editor of your Supabase dashboard to create the `ideas` table:

```sql
-- Create the table for ideas
create table ideas (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  slug text unique not null,
  description text not null,
  problem text,
  solution text,
  abandon_reason text,
  category text not null,
  tags text[],
  status text default 'available'::text,
  license text default 'public-domain'::text,
  likes integer default 0,
  views integer default 0,
  author_name text default 'Anonymous'::text
);

-- Enable Row Level Security (RLS)
alter table ideas enable row level security;

-- Create policies (Allow anyone to read ideas, allow anyone to insert ideas)
create policy "Public ideas depend on your security model"
on ideas for select
using ( true );

create policy "Anyone can insert ideas"
on ideas for insert
with check ( true );
```

## 4. Setup Environment Variables

Add your credentials to your `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```
