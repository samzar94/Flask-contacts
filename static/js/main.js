const btndelete = document.querySelectorAll('.btn-delete')
if (btndelete) {
  const btnsarray = Array.from(btndelete)
  btnsarray.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (!confirm('Are you sure you want to delete it?')) {
        e.preventDefault()
      }
    })
  })
}
