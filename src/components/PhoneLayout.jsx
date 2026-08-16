import wallpaper from "../assets/iphone_wllpp.jpg";
import Notch from "./Notch";

export default function PhoneLayout({ children }) {
	return (
		<div
			className="flex absolute mt-4 flex border-4 border-solid rounded-4xl border-black w-[390px] h-[844px] bg-cover bg-center outline-white outline-4"
			style={{
				backgroundImage: `url(${wallpaper})`,
			}}
		>
			<header className="absolute flex w-[390px] h-[8] justify-center">
				<Notch />
			</header>
			<div className="flex align-center">{children}</div>
		</div>
	);
}
