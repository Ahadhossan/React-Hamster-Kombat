import { LogoYoutube, Person, Rocket, Wallet } from "react-ionicons";

const ProfileBar = () => {
	return (
		<div className="flex flex-col w-full gap-3">
			<div className="flex items-center justify-center w-full gap-3">
				<div className="w-fit rounded-xl bg-[#012237] h-[50px] flex items-center gap-3 px-3 cursor-pointer">
					<Person cssClasses={"!fill-[#fdb224]"} />
					<span className="pr-4 font-semibold whitespace-nowrap">Ahad</span>
				</div>
				<div className="w-full rounded-xl bg-[#012237] h-[50px] flex items-center justify-center gap-3 px-3 cursor-pointer">
					<Rocket cssClasses={"!fill-[#fdb224]"} />
					<span className="font-semibold whitespace-nowrap">Boost</span>
				</div>
				<div className="w-full rounded-xl bg-[#012237] h-[50px] flex items-center justify-center gap-3 px-3 cursor-pointer">
					<Wallet cssClasses={"!fill-[#fdb224]"} />
					<span className="font-semibold whitespace-nowrap">Wallet</span>
				</div>
			</div>
			<div className="w-full rounded-xl bg-[#012237] h-[60px] flex items-center justify-center gap-3 cursor-pointer">
				<LogoYoutube
					cssClasses={"!fill-[#ff0000]"}
					width="32px"
					height="32px"
				/>
				<span className="font-semibold whitespace-nowrap">Learn how to play</span>
			</div>
		</div>
	);
};

export default ProfileBar;
