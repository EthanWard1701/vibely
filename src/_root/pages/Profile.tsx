import { useLocation, useParams } from 'react-router-dom';

interface ProfileState {
  name?: string;
  posts?: Array<{
    id?: string;
    caption?: string;
    location?: string;
  }>;
}

const Profile = () => {
  const { id } = useParams();
  const { state } = useLocation() as { state?: ProfileState };

  const posts = Array.isArray(state?.posts) ? state?.posts : [];
  const displayName = state?.name ?? id ?? 'Profile';

  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-6 p-6">
      <header className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-semibold">{displayName}</h1>
        <p className="text-sm text-slate-500">
          {posts.length === 1 ? 'Showing 1 post' : `Showing ${posts.length} posts`}
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-slate-500">This profile has not shared any posts yet.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {posts.map((post, index) => (
            <li
              key={post.id ?? index}
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="font-medium text-slate-900">
                {post.caption?.trim() || 'Untitled post'}
              </p>
              {post.location && (
                <p className="text-sm text-slate-500">Location: {post.location}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Profile;
