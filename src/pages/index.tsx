import { addData, fetchAllData } from '@/data-service';
import { IData } from '@/entities';
import { Chart, CategoryScale, LinearScale, BarElement} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line, Bar  } from "react-chartjs-2";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDatas from '@/components/FormDatas';


Chart.register(CategoryScale, LinearScale, BarElement);

export default function Home() {

  const [datas, setDatas]= useState<IData[]>([]);
 


  useEffect(() => {
    const fetchData = async () => {
        const datas= await fetchAllData();
        setDatas(datas);
        console.log(datas);
    };
    fetchData();
  }, []);


  async function ajoutDatas(datas:Data) {
    const ajout = await addData(datas);
    //ici on met à jour le tableau livres, donc contiendra tous les livres et les nouveaux element qui sont des "ajout"
    if (ajout) {
      setDatas((datas) => [...datas, ajout]);
    }
  }
  


  const data={
   
    labels: setDatas.map(d => d.label),
    datasets: [{
        data: datas.map(d => d.donnees),
        
        backgroundColor: datas.map(d => d.background),
          borderWidth: 1,

        }]
      };

       
        console.log(datas.map(d => d.label));
    

  return (
    <div className='chart'>
       <h2>DONNEES</h2>


    <div >
      <Bar 
        data={data}
        height={300}
        width={600}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
    <div className='container'>
    <FormDatas onSubmittData={ajoutDatass} />
    </div>
   
    </div>
  );
};
