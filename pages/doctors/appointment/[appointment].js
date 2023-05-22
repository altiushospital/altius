import React from 'react';
import { useRouter } from 'next/router';

const DoctorDetails = () => {
  const router = useRouter();
  const { doctorId } = router.query;

  // Fetch the doctor details using the doctorId from the backend

  return (
    <div>
      {/* Render the doctor details */}
      <h1>Doctor Details for doctorId: {doctorId}</h1>
    </div>
  );
};

export default DoctorDetails;
