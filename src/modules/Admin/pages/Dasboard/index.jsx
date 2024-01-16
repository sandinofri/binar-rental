import MainLayout from "../../layouts/MainLayout"
import MENU_LISTS from "../../constants/menuLists"

export default function Dashboard() {
  return (
    <MainLayout menu={MENU_LISTS[0]}>
      <h1>Hello mama</h1>
    </MainLayout>
  )

}
