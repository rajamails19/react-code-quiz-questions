function Form() {
  function handleSubmit(e) {
    ________;
    console.log('Form submitted');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
