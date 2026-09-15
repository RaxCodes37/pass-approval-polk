CREATE TABLE "passes" (
	"pass_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"student_name" text NOT NULL,
	"class_student_departed_from" text NOT NULL,
	"time_of_departure" timestamp DEFAULT now() NOT NULL,
	"time_of_return" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "user_role" text DEFAULT 'member' NOT NULL;