// סניף חדר כושר
export interface Branch {
  branch_code: number;
  branch_name: string;
}

// שיעור סטודיו
export interface StudioClass {
  class_code: number;
  branch_code: number;
  class_name: string;
  start_time: string;
  end_time: string;
  instructor_name: string;
  max_participants: number;
  duration_minutes: number;
}
