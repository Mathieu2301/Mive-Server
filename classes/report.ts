interface Report {
  /** Numéro de la rame */
  course_id: number;
  /** Identifiant GTFS de la gare */
  stop_id: number;
  /** Numéro de la ligne */
  route_short_name: string;
  /** Nom de la direction */
  trip_headsign: string;
  /**
   * Code de direction
   * (0 = aller, 1 = retour)
   */
  direction_id: number;
  /** Heure de départ */
  departure_time: string;
  /**
   * Si departure_time une
   * heure théorique
   */
  is_theorical: boolean;
  /**
   * Temps d'attente avant l'arrivée
   * du véhicule (en secondes)
   */
  delay_sec: number;
  /** Code de la gare d'arrivée */
  dest_ar_code: number;
  /** Code de la rame */
  course_sae: number;
}

export default Report;
