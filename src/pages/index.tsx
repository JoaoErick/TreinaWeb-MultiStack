import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextField from 'ui/components/inputs/TextField/TextField';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography } from '@material-ui/core';
import { FormElementsContainer, ProfissionaisPaper,  ProfissionaisContainer} from '@styles/pages/index.style';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <FormElementsContainer>
        <TextFieldMask 
          mask={'99.999-999'} 
          label={'Digite seu CEP'} 
          fullWidth 
          variant={'outlined'}
        />
        <Typography color={'error'}>CEP inválido</Typography>
        <Button 
        variant={'contained'} 
        color={'secondary'} 
        sx={{width: '220px'}}
        >
          Buscar
        </Button>
      </FormElementsContainer>

      <ProfissionaisPaper>
        <ProfissionaisContainer>
          <UserInformation
            name={"João Erick Barbosa"}
            picture={"https://github.com/JoaoErick.png"}
            rating={1}
            description={"Serrinha"}
          />
          <UserInformation
            name={"João Erick Barbosa"}
            picture={"https://github.com/JoaoErick.png"}
            rating={3}
            description={"Serrinha"}
          />
          <UserInformation
            name={"João Erick Barbosa"}
            picture={"https://github.com/JoaoErick.png"}
            rating={4}
            description={"Serrinha"}
          />
          <UserInformation
            name={"João Erick Barbosa"}
            picture={"https://github.com/JoaoErick.png"}
            rating={1}
            description={"Serrinha"}
          />
          <UserInformation
            name={"João Erick Barbosa"}
            picture={"https://github.com/JoaoErick.png"}
            rating={3}
            description={"Serrinha"}
          />
          <UserInformation
            name={"João Erick Barbosa"}
            picture={"https://github.com/JoaoErick.png"}
            rating={4}
            description={"Serrinha"}
          />
        </ProfissionaisContainer>
      </ProfissionaisPaper>
      
    </div>
  );
}
