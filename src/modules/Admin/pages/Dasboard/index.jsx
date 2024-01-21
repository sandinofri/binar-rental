import MainLayout from "../../layouts/MainLayout"
import MENU_LISTS from "../../constants/menuLists"
import { Breadcrumb } from "../../components/Breadcrumb";

export default function Dashboard() {
  return (
    <MainLayout menu={MENU_LISTS[0]}>
      <Breadcrumb currentLink="Dashboard" previousLink="Dashboard" />
      <h1>Hello mama</h1>
    </MainLayout>
  )

}
