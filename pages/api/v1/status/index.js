function status(request, response) {
  response.status(200).json({ message: "Resposta do status" });
}
export default status;
