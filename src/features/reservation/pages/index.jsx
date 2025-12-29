import { MainLayout } from "../../../shared/layouts/main-layout/MainLayout";
import { ReservationForm } from "../components/reservation-form";

export function ReservePage() {
  return (
    <>
      <MainLayout>
        <ReservationForm />
      </MainLayout>
    </>
  );
}
