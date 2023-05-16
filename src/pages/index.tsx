import RootLayout from "@/components/layout";
import Image from "next/image";
import { selectAuthState, setAuthState } from "@/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <RootLayout>
      <div className="min-h-screen p-24">
        <h1>Main content</h1>

        <div className="m-6">
          {!authState && (
            <button
              className="bg-slate-300 p-5 rounded-lg"
              onClick={() => {
                dispatch(setAuthState(true));
              }}
            >
              Sign In
            </button>
          )}
          <br />
          {authState && (
            <button
              className="bg-slate-300 p-5 rounded-lg"
              onClick={() => {
                dispatch(setAuthState(false));
              }}
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </RootLayout>
  );
}
