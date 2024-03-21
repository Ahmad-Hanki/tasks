export const formatDate = (dateString?: string) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getCurrentDate = () => {
    const currentDate = new Date(); 
    const year = currentDate.getFullYear(); 
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const day = String(currentDate.getDate()).padStart(2, '0'); 
    return `${year}-${month}-${day}`; 
  };