import wallpaper from "../assets/iphone_wllpp.jpg";
import Notch from "./Notch";

export default function PhoneLayout() {
	return (
		<div
			className="mt-4 flex border-4 border-solid rounded-4xl border-black w-[390px] h-[844px] bg-cover bg-center outline-white outline-4"
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
