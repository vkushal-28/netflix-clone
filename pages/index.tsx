import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();
  console.log("🚀 ~ file: index.tsx:22 ~ Home ~ user:", user);
  return (
    <>
      <div className="text-2xl text-green-500">Netflix</div>
      <p className="text-over">Logged in as : {user && user?.email} </p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        Logout
      </button>
    </>
  );
}
