import { FloatingNav } from "../../components/ui/floating-navbar"
export default function Nav() {
    const navItems = [
    {
      name: "Strategy Builder",
      link: "#strategy-builder",
    },
    {
      name: "My Strategies",
      link: "#my-strategies",
    },
    {
      name: "Backtest",
      link: "#backtest",
    },
    {
      name: "Market Place",
      link: "#marketplace",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ]
  return (
    <div className="">
         <FloatingNav navItems={navItems} />
    </div>
  );
}
