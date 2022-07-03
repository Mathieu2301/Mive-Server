import { readFileSync } from 'fs';

const raw = readFileSync('./data/offre_du_jour.csv', 'utf8');
const lines = raw.split('\n');
lines.shift();

const stops: { [stopID: number]: string } = {};

for (const line of lines) {
  if (!line) continue;

  const {
    2: stopID,
    3: stopName,
    4: routeShortName,
  } = line.split(';');

  if (!['1', '2', '3', '4'].includes(routeShortName)) continue;
  if (!stops[Number(stopID)]) stops[Number(stopID)] = stopName;
}

export default stops;
