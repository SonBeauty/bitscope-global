import { BlogHeader } from "@/components/PageComponents/Blog/BlogHeader";
import { BlogList } from "@/components/PageComponents/Blog/BlogList";
import MainBlog from "@/components/PageComponents/Blog/MainBlog";
export default function Blog() {
  return (
    <MainBlog lastest={false}>
      <BlogHeader />
      <BlogList />
    </MainBlog>
  );
}
