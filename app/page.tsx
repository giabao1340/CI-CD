import Home from "@/pages/home";
export const metadata = {
  title: "App Router",
};
export default function Page() {
  return (
    <>
      <Home />
      <p>Hello World!!!</p>
    </>
  );
}

// # Chuyển commit từ main sang branch update
// git checkout update
// git cherry-pick main   # lấy commit từ main sang

// # Xóa commit trên main local
// git checkout main
// git reset --hard origin/main
