import DateTime from "../components/DateTime";
import Notification from "../components/Notification";
import PhoneLayout from "../components/PhoneLayout";

export default function LockScreen() {
	return (
		<PhoneLayout>
			<div className="w-max h-max flex-col align-center mt-24 absolute">
				<DateTime />
				<Notification />
			</div>
		</PhoneLayout>
	);
}
