import PhoneLayout from "../components/PhoneLayout";
import DateTime from "../components/DateTime";

export default function LockScreen() {
	return (
		<PhoneLayout>
			<div className="bg-white w-max h-max flex-col align-center">
				<DateTime />
			</div>
		</PhoneLayout>
	);
}
