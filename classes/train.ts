export interface Position {
  /** Identifiant de la gare */
  stop_id: number;
  /** Nom de la gare */
  stop_name: string;
  /** Heure de départ */
  departure_time: string;
  /**
   * Temps d'attente avant l'arrivée
   * du véhicule (en secondes)
   */
  delay_sec: number;
}

interface Course {
  /** Numéro de la rame */
  course_id: number;
  /** Code de la rame */
  course_sae: number;
  /** Numéro de la ligne */
  route_short_name: string;
  /** Nom de la direction */
  trip_headsign: string;
  /**
   * Code de direction
   * (0 = aller, 1 = retour)
   */
  direction_id: number;
  /**
   * Liste des futures
   * positions de la rame
   */
  positions: Position[];
  /** Prochaine position de la rame */
  next_pos: Position;
}

export default Course;
