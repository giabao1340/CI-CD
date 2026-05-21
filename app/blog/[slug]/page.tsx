type Params = {
  params: {
    slug: string;
  };
};
// Thêm function này vào file page.tsx của [slug]
export async function generateStaticParams() {
  // Trả về danh sách các slug
  return [
    { slug: "bai-viet-1" },
    { slug: "bai-viet-2" },
    // thêm các slug của bạn...
  ];
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      Hi Bao
    </>
  );
}
