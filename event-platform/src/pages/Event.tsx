import { Navigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const primarySlug = "/event/lesson/abertura-do-ignite-lab";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <Navigate to={primarySlug} />}
        <Sidebar />
      </main>
    </div>
  );
}
