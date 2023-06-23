<script>
import AppBanner from '../components/AppBanner.vue';
import AppFooter from '../components/AppFooter.vue';
import { store } from "../store";

export default {
    name: "AboutView",
    components: {
        AppBanner,
        AppFooter,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <!-- <AppBanner :title="store.views[3].about.title" :description="store.views[3].about.banner_description" />
    /Banner -->

    <section id="about_view">
        <div class="container">
            <div class="row">

                <div class="col-4 my_image">
                    <img class="img-fluid"
                        src="https://media.discordapp.net/attachments/1071838099073671259/1118919573895401494/unaltroDio_dark_blueprint_background_052cb6ab-bf93-4281-9ade-8c70379aeb07.png?width=1506&height=1506"
                        alt="">
                </div>
                <!-- /col -->

                <div class="col-7 my_info">
                    <h1>Francesco Iannuzzi</h1>
                    <p class="tracking-in-contract-bck-bottom">
                        Appassionato d'informatica fin da bambino con una storia di resilienza da condividere: <br>
                        Dopo un incidente stradale che mi ha costretto a subire diversi interventi chirurgici seguiti da un
                        lunga riabilitazione, sono potuto tornare finalmente ad una vita normale.
                    </p>

                    <p>
                        La mia determinazione nel superare le sfide fisiche e mentali che ho affrontato mi ha dimostrato
                        l'importanza della perseveranza, dell'adattabilità e della curiosità intellettuale. Con una solida
                        formazione in programmazione, ho acquisito competenze nella creazione di siti web
                        responsivi, intuitivi e esteticamente accattivanti.
                    </p>

                    <p>
                        La mia missione è trasformare idee creative in realtà digitali. Collaboro strettamente con i clienti
                        per comprendere le loro esigenze, traducendo i loro obiettivi in soluzioni web personalizzate. Sono
                        sempre alla ricerca delle ultime tendenze e tecnologie nel campo dello sviluppo web, al fine di
                        offrire prodotti all'avanguardia.
                    </p>

                    <p>
                        Oltre alla mia competenza tecnica, mi distingo per la mia attenzione ai dettagli, la mia capacità di
                        problem-solving e il mio impegno per la soddisfazione del cliente. Sono appassionato di
                        apprendimento continuo e mi piace tenere il passo con le ultime novità nel settore.
                    </p>

                    <p>
                        Esplora il mio portfolio per scoprire alcuni dei progetti su cui ho lavorato e per farti un'idea del
                        mio stile e delle mie capacità. Sono entusiasta di collaborare con te per creare soluzioni digitali
                        innovative e di successo. Contattami per iniziare il tuo prossimo progetto web!
                    </p>
                </div>
                <!-- /col -->

            </div>
        </div>
    </section>
    <!-- /about_view -->

    <AppFooter />
    <!-- /Footer -->
</template>


<style lang="scss" scoped></style>