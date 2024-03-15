function confirmAction(option) {
  if (confirm(`Estás a punto de enviar una ${option}. ¿Deseas continuar?`)) {
    switch(option) {
      case 'peticiones':
        window.open('https://forms.gle/8BffuAiYNWYRm23X9', '_blank');
        break;
      case 'quejas':
        window.open('https://forms.gle/3uFJCfyhKZoL1vfb9', '_blank');
        break;
      case 'reclamos':
        window.open('https://forms.gle/VARmJJncakijquMi6', '_blank');
        break;
      case 'sugerencias':
        window.open('https://forms.gle/PUatY5kmWeHdcqyDA', '_blank');
        break;
      default:
        console.log(`No se reconoce la opción: ${option}`);
    }
  } else {
    console.log(`El usuario canceló el envío de ${option}`);
  }
}
