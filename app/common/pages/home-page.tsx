import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | 사주AI" },
    {
      name: "description",
      content: "사주AI - 어디에나 쉽게 찾는 1:1 사주 상담",
    },
  ];
};

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/app/pictures/clouds_4k.webp')",
      }}
    ></div>
  );
}
