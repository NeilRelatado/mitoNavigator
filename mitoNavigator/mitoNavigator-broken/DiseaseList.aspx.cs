using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace mitoNavigator
{
    public partial class DiseaseList : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Source.Visible = false;
            SourceLink.Visible = false;

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            if(DiseaseListDrop.SelectedValue =="1")
            {
                Source.Visible = true;
                lblName.Text = "Alpers Disease";
                lblSymptoms.Text = "Alpers disease is a neurologic disorder that begins during childhood and is followed with serious liver disease, spasticity, and dementia.";
               lblDescription.Text = "Alpers disease starts off with seizures around the ages of 3 months to 5 years old. Then the child can’t have normal muscle tone or hypotonia, but the limbs appear stiff. There will also be grey matter in your brain. This doesn’t happen all the time, but it usually does happen. Then they lose intellectual functions like thinking and remembering, and might lost control of their arms and legs. Then their liver will fail completely..";
                Source.Text = "Alpers Disease. NORD (National Organization for Rare Disorders). N.p., n.d. Web. 13 Mar. 2017.";
            }
            else if (DiseaseListDrop.SelectedValue=="2")
            {
                SourceLink.Visible = true;
                lblName.Text = "Friedreich Ataxia";
                lblSymptoms.Text = "Ataxia involves inadequate muscle coordination that leads to unsteady in an unsteady gain , and poor control of muscle coordination. Muscles in the throat and mouth may lead to slurred speech. Lateral or sideways curvature of the spine ( scoliosis) or foot abnormalities may occur. ";
                lblDescription.Text = "Is a genetic, progressive, neurodegenerative movement disorders with a mean age of onset between 10 and 15 years. It is often associated cardiomyopathy, a disease of a cardiac muscle that leads to heart failure ,which could present as short upon exertion. Clinical findings and symptoms have found  that  FRDA is a result from degenerative changes in the sensory nerve fibers at the spine in structures known as dorsal root ganglia.";
                SourceLink.NavigateUrl = "https://rarediseases.org/rare-diseases/friedreichs-ataxia/";
            }

            else if (DiseaseListDrop.SelectedValue=="3")
            {
                Source.Visible = true;
                lblName.Text = "Leigh Syndrome";
                lblSymptoms.Text = "General symptoms for infants include: diarrhea, vomiting, and dysphagia (trouble swallowing or sucking), leading to a failure to thrive. Early symptoms shows that the children are irritable and cry more often than normal and seizures possibility.";
                lblDescription.Text = "A rare disorder that affects the central nervous system. The disease most likely to occurs during an infant’s initial birth year, but may occur between the ages of two years and younger. ";
                Source.Text = "Leigh syndrome - Genetics Home Reference.U.S. National Library of Medicine. National Institutes of Health, n.d. Web. 13 Mar. 2017.";
            }
            else if (DiseaseListDrop.SelectedValue == "4")
            {
                SourceLink.Visible = true;
                lblName.Text = "Luft Disease";
                lblSymptoms.Text = "Patients diagnosed with with Luft’s disease may experience a wide array of symptoms. Some of the most common ones are: Muscle weakness, excessive perspiration, hyper-metabolism, lack of loss, and more.  ";
                lblDescription.Text = "Also known as Hyper metabolic mitochondrial syndrome, is characterized as severe hyper-methbolism and heat intorlerance. Hyper-metabolism is the inusual increased rate of metabolic activity in the human body ";
                SourceLink.NavigateUrl = "http://zachbullard.blogspot.ca/2016/11/luft-disease-what-is-it.html";
            }
            else if (DiseaseListDrop.SelectedValue=="9")
            {
                Source.Visible = true;
                lblName.Text = "Mitochondrial Myopathy";
                lblSymptoms.Text = "Common muscle weakness, cramps, stiffness, spasm, and tetany";
                lblDescription.Text = "Myopathy is a muscular disease where the muscle fibers aren’t able to function resulting in muscular weakness.";
                Source.Text = "Mitochondrial Myopathies (MM) U.S. National Library of Medicine. National Institutes of Health, n.d. Web. 13 Mar. 2017.";
            }
            else if (DiseaseListDrop.SelectedValue == "7")
            {
                Source.Visible = true;
                lblName.Text = "MERRF ";
                lblSymptoms.Text = "Related symptoms involve: progressive myoclonic epilepsy, short stature, hearing loss, lactic acidosis, exercise intolerance, and poor night vision; in addition, the disease shows Ragged Red Fibers - clumps of diseased mitochondria accumulate in the subsarcolemmal region of the muscle fiber and appear as Ragged Red Fibers when muscle is stained with modified Gömöri trichrome stain";
                lblDescription.Text = "An extremely rare disease that affects the muscles and the nervous system.";
                Source.Text = "MERRF - Genetics Home Reference. U.S. National Library of Medicine. National Institutes of Health, n.d. Web. 13 Mar. 2017.";
            }
           
            else if (DiseaseListDrop.SelectedValue=="8")
            {
                Source.Visible = true;
                lblName.Text = "NARP ";
                lblDescription.Text = "Neuropathy, ataxia, and retinitis pigmentosa (NARP) causes signs and symptoms that will affect the nervous system";
                lblSymptoms.Text = "General symptoms are numbness, tingling, or pain in the arms and legs, muscle weakness, and ataxia. Possible loss of vision, which has a possibility of causing a condition called retinitis pigmentosa, which will cause the light-sensing cells of a retina to gradually deteriorate.";
                Source.Text = "Maternally Inherited Leigh Syndrome and NARP Syndrome. NORD (National Organization for Rare Disorders). N.p., n.d. Web. 13 Mar. 2017.";
            }
            else if (DiseaseListDrop.SelectedValue == "10")
            {
                Source.Visible = true;
                lblName.Text = "MNGIE ";
                lblDescription.Text = "Mitochondrial neurogastrointestinal encephalopathy (MNGIE) can affect several parts of the body, but usually the digestive system and the nervous system. This disease can appear from an infant to an adult and can worsen in time.";
                lblSymptoms.Text = "Certain things that can happen in your digestive system is gastrointestinal dysmotility (Muscles and nerves of the digestive system do not move food through the digestive tracks well). This causes you to feel full despite eating little, trouble swallowing, nausea and vomiting. Certain things that can happen in your nervous system is tingling, numbness, and weakness in their limbs usually in the hands and feet, droopy eyelids, and hearing loss.";
                Source.Text = "Hirano, Michio. Mitochondrial Neurogastrointestinal Encephalopathy Disease. GeneReviews® [Internet]. U.S. National Library of Medicine, 14 Jan. 2016. Web. 13 Mar. 2017.";
            }







        }


        protected void Unnamed1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}