import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
  // Agrega aquí tus estilos globales
  root: {
    flexGrow: 1,
  },
  appBar: {
    marginBottom: theme.spacing(3),
  },
  content: {
    padding: theme.spacing(3),
  },
}));

export default useStyles;
