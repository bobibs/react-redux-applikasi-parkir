import { MOBIL, MOTOR } from '../types';

export const BiayaMobil = durasi => {
	return {
		type: MOBIL,
		payload: durasi
	};
};

export const BiayaMotor = durasi => {
	return {
		type: MOTOR,
		payload: durasi
	};
};
