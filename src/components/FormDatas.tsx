import { IData } from "@/entities";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";


// on a notre interface qui est definit, on met le onSubmit qui se trouve dans notre index, elle respresente la fonction ajoutLivre. Elle renvoie une promesse de type void
// donc cet interface permet de faire  passer onSubmit comme etant un parametre dans notre fonction FormLivre
interface Props {
  onSubmitData: (livre: IData) ;
}


export default function FormDatas(props: Props) {

/*   Nous utilsons React Hook Form pour gerer notre formulaire, nous utilsons le hook useform pour initialiser le formulaire et retourner plusieurs propriétes
Nous avons register qui permet d'enregistrer chaque champs lors de la saison
handleSubmit lui gere la soumission et la transmission des données,
FormState (etat du formaulaire) permet de gerer les erreurs, ici on utilse la propriété errors
et reset qui va vider les champs apres soumisson du formulaire
 */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IData>();

  /*
  nous creons la fonction submit qui prends en parametre la data qui est ici les données saisies dans les champs du formulaires
  ensuite on apelle la fonctio props.onSubmitLivre( qu'on avait defini dans l'index et qui est ici la fonction ajoutLivre).
   */
  const onSubmit = (data: IData) => {
    props.onSubmitData(data);
    reset();
  };

  return (
    <>
    {/* ici nous utilisons handleSubmit pour valider le forumaire et transferer les données, il prend en parametre la fonction onSubmit qui lui sera appélé lors de la soumisson  */}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Label</Form.Label>
              {/* Dans notre input nous rajouter register pour enregister la données et ici le "name" du champ est titre, nous n'avons plus besoin ici de mettre onChange ou le name le useForm facilite cette gestion  */}
              <Form.Control
                type="text"
                placeholder="Mois"
                {...register("label")}
              />
            
            </Form.Group>
          </div>
          <div className="col">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Données</Form.Label>
              <Form.Control
                type="text"
                placeholder="Valeurs"
                {...register("donnees", {
                    valueAsNumber: true,
                    required: true
                  })}
              />
            </Form.Group>
          </div>

          <div className="col">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Coueleur de fond</Form.Label>
              <Form.Control
                type="text"
                placeholder="red, blue"
                {...register("background")}
              />
             
            </Form.Group>
          </div>
          <div className="col">
            <Button variant="primary" type="" className="col mt-4">
              Ajouter
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}
