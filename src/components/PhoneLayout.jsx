import wallpaper from "../assets/iphone_wllpp.jpg";
import Notch from "./Notch";

export default function Phone() {
	return (
		<div
			className="flex border-4 border-solid rounded-xl border-white w-[390px] h-[844px] bg-cover bg-center"
			style={{
				backgroundImage: `url(${wallpaper})`,
			}}
		>
			<header className="flex w-[390px] h-8 justify-center">
				<Notch />
			</header>
		</div>
	);
}
