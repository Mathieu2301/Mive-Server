import { get } from 'https';
import type Report from './classes/report';

export default function fetchReports(): Promise<Report[]> {
  const url = 'https://data.montpellier3m.fr/sites/default/files/ressources/TAM_MMM_TpsReel.csv';

  return new Promise((cb, err) => {
    const rq = get(url, (res) => {
      let data = '';
      const reports: Report[] = [];

      res.on('data', (c) => { data += c; });
      res.on('end', () => {
        const lines = data.split('\n');
        lines.shift();

        for (const line of lines) {
          if (!line) continue;
          const props = line.split(';');

          reports.push({
            course_id: Number(props[0]),
            stop_id: Number(props[2]),
            route_short_name: props[4],
            trip_headsign: props[5],
            direction_id: Number(props[6]),
            departure_time: props[7],
            is_theorical: Number(props[8]) === 1,
            delay_sec: Number(props[9]),
            dest_ar_code: Number(props[10]),
            course_sae: Number(props[11]),
          });
        }

        cb(reports);
      });
    });

    rq.on('error', err);
  });
}
