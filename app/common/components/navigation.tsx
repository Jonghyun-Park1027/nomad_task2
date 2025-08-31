import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "~/common/components/ui/navigation-menu";
import { Link } from "react-router";

const menus = [
  {
    name: "만세력",
    to: "/products",
    items: [
      {
        name: "만세력 계산기",
        description: "사용자 정보를 입력하고 만세력을 출력하는 서비스",
        to: "/products/manseryuk",
      },
      {
        name: "나의 만세력",
        description: "내 정보 입력으로 생성된 만세력 리스트",
        to: "/products/my-manseryuk",
      },
      {
        name: "categories",
        description: "만세력 카테고리",
        to: "/products/categories",
      },
      {
        name: "search",
        description: "검색",
        to: "/products/search",
      },
      {
        name: "submit",
        description: "만세력 제출",
        to: "/products/submit",
      },
      {
        name: "promote",
        description: "만세력 홍보",
        to: "/products/promote",
      },
    ],
  },
  {
    name: "사주 상담",
    to: "/talks",
    items: [
      {
        name: "AI 사주 상담",
        description: "AI 사주 상담",
        to: "/talks",
      },
      {
        name: "나의 사주 상담",
        description: "내 정보 입력으로 생성된 사주 상담 리스트",
        to: "/talks/my-talks",
      },
      {
        name: "Part-time Job",
        description: "Find a remote job in the world",
        to: "/talks?type=part-time",
      },
      {
        name: "Internship",
        description: "Find a remote job in the world",
        to: "/talks?type=internship",
      },
      {
        name: "Freelance",
        description: "Find a remote job in the world",
        to: "/talks?type=freelance",
      },
      {
        name: "Submit a Job",
        description: "Find a remote job in the world",
        to: "/talks/submit",
      },
    ],
  },
];

export default function Navigation() {
  return (
    <nav className="flex px-20 h-24 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50">
      {/*<nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex items-center">*/}

      <div className="flex items-center font-bold font-['Nanum_Brush_Script'] text-5xl text-gold">
        <Link to="/">사주AI</Link>
      </div>
    </nav>
  );
}
