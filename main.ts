import type Train from './classes/train';
import fetchReports from './fetcher';
import stops from './stops';

// console.log(stops);

(async () => {
  const data = await fetchReports();
  const trains: { [uid: string]: Train } = {};

  for (const course of data) {
    if (
      course.is_theorical
      || !['1', '2', '3', '4'].includes(course.route_short_name)
    ) continue;

    const uid = `${course.course_id}@${course.course_sae}`;

    if (!trains[uid]) {
      trains[uid] = {
        course_id: course.course_id,
        course_sae: course.course_sae,
        route_short_name: course.route_short_name,
        direction_id: course.direction_id,
        trip_headsign: course.trip_headsign,
        positions: [],
        next_pos: {
          stop_id: course.stop_id,
          stop_name: stops[course.stop_id],
          delay_sec: course.delay_sec,
          departure_time: course.departure_time,
        },
      };
    } else if (trains[uid].next_pos.delay_sec > course.delay_sec) {
      trains[uid].next_pos = {
        stop_id: course.stop_id,
        stop_name: stops[course.stop_id],
        delay_sec: course.delay_sec,
        departure_time: course.departure_time,
      };
    }

    trains[uid].positions.push({
      stop_id: course.stop_id,
      stop_name: stops[course.stop_id],
      delay_sec: course.delay_sec,
      departure_time: course.departure_time,
    });
  }

  console.log(trains, `${Object.keys(trains).length} trains`);

  console.log(trains['1581254792@268437235']);
})();
