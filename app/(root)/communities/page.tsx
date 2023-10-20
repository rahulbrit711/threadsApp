import { currentUser } from "@clerk/nextjs";

async function Page() {
  //const user = await currentUser();
  //if (!user) return null;

  // fetch organization list created by user
  //const userInfo = await fetchUser(user.id);
  //if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <>
      <h1 className='head-text'>Communities</h1>

    </>
  );
}

export default Page;