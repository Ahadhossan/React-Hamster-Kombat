/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import coin from "../../assets/images/coin.webp";
import LevelBar from "./LevelBar";
import StatusBar from "./StatusBar";

interface FloatingText {
	id: number;
	x: number;
	y: number;
}
const Mine = () => {
	const maxEnergy = 250;
	const [value, setValue] = useState(10000000);
	const [energy, setEnergy] = useState(maxEnergy);
	const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
	const [nextId, setNextId] = useState(0);

	const handleClick = (e: any) => {
		if (energy > 0) {
			setValue((prev) => prev + 1);
			setEnergy((prev) => (prev > 0 ? prev - 1 : 0));

			const { clientX: x, clientY: y } = e;
			const newText: FloatingText = { id: nextId, x, y };
			setFloatingTexts((prev) => [...prev, newText]);
			setNextId((prev) => prev + 1);

			setTimeout(() => {
				setFloatingTexts((prev) => prev.filter((text) => text.id !== newText.id));
			}, 2000);
		}
	};

	const energyPercentage = (energy / maxEnergy) * 100;

	useEffect(() => {
		const interval = setInterval(() => {
			setEnergy((prevEnergy) => {
				if (prevEnergy < maxEnergy) {
					return prevEnergy + 1;
				}
				return prevEnergy;
			});
		}, 1500);

		return () => clearInterval(interval);
	}, []);
	return (
		<div className="flex flex-col justify-between w-full h-full py-4">
			<LevelBar />
			<StatusBar />
			<div className="flex items-center justify-center w-full">
				<span className="font-bold text-[60px]">${value.toLocaleString()}</span>
			</div>
			<div className="flex items-center justify-center">
				<img
					src={coin}
					alt="coin"
					onClick={handleClick}
					className="w-[50%] cursor-pointer drop-shadow-2xl coin-button"
				/>
			</div>
			<div className="flex flex-col w-full gap-2">
				<div className="flex items-center justify-between w-full">
					<span className="text-[15px]">Energy</span>
					<span className="text-[15px] font-semibold">
						{energy} / {maxEnergy}
					</span>
				</div>
				<div className="w-full relative rounded-full h-[16px] bg-[#012237] border border-[#073755]">
					<div
						className="absolute left-0 h-full rounded-full bg-gradient-to-r from-[#dc7b0c] to-[#fff973]"
						style={{ width: `${energyPercentage}%` }}
					></div>
				</div>
			</div>
			{floatingTexts.map((text) => (
				<span
					className="floating-text font-semibold text-[30px]"
					key={text.id}
					style={{ top: text.y, left: text.x }}
				>
					+1
				</span>
			))}
		</div>
	);
};

export default Mine;
