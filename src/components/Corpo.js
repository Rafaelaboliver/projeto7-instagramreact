import Stories from "./Stories"
import Posts from "./Posts"
import SideBar from "./Sidebar"

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </div>
    )
}