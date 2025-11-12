import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
	return (
		<div>
			<h1 className=" text-xl font-extralight">Landing Page</h1>
			<Card />
			<br />
			<br />
			<div className="container flex flex-col gap-3">
				<div className="flex gap-4">
					<Button
						styles="text-sm p-1 bg-gray-300 text-black "
						title="Small Button"
					/>
					<Button
						styles="text-base p-1 bg-gray-300 text-black "
						title="Medium Button"
					/>
					<Button
						styles="text-lgp-1 bg-gray-300 text-black "
						title="Large Button"
					/>
				</div>

				<div className="flex gap-4">
					<Button
						styles=" p-1 bg-gray-300 text-black rounded-sm"
						title="Rounded Button"
					/>
					<Button
						styles="p-1 bg-gray-300 text-black rounded-md"
						title="Rounded Button"
					/>
					<Button
						styles="p-1 bg-gray-300 text-black rounded-full"
						title="Rounded Button"
					/>
				</div>
			</div>
		</div>
	);
};
export default Landing;
