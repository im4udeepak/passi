(function ($) {
    'use strict';
    let slickObj = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        dotsClass: "slick-dots dark d-flex container",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    }
    const htmlData = (data, index) => {
        const modalId = `myModal-${index}`;
        return `<div class="slide-item px-2" data-index="${index}">
        <div class="service-box-two">
            <img src=${data?.image} alt=${data?.title} class="image-fit image">
            <div class="service-actions transform-center text-center">
                <a href=${data?.image}
                    class="icon-btn btn btn-primary btn-sm image-popup" data-lightbox="image-1"
                    data-title=${data?.title}><i class="fal fa-image"></i></a>
                <button type="button" data-toggle="modal" data-target=#${modalId}
                    data-src=${data?.file} data-title=${data?.title}
                    class="icon-btn btn btn-secondary btn-sm modal-btn" tabindex=${index}>
                    <i class="fal fa-file-pdf"></i>
                </button>
            </div>
        </div> 
    </div>`
    }
    const modalData = (data, index) => {
        return $('body').append(`<div class="modal fade" id="${data?.title}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel${data?.title}"></h5>
                    <button type="button" class="btn btn-primary btn-sm icon-btn close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body p-0">
                    <!-- Iframe -->
                    <iframe id="iframeContent${data?.title}" width="100%" height="100%"></iframe>
                </div>
            </div>
        </div>
    </div>`);
    }

    $(document).ready(function () {
        const items = $("#boston-university");
        const jsonData = [
            { title: "Acid-peptic-disorders-Module", image: "assets/service-detail/cms-courses/boston-university/Acid-peptic-disorders-Module.jpg", file: "assets/service-detail/cms-courses/boston-university/Acid-peptic-disorders-Module.pdf" },
            { title: "Alopecia-CME", image: "assets/service-detail/cms-courses/boston-university/Alopecia-CME.jpg", file: "assets/service-detail/cms-courses/boston-university/Alopecia-CME.pdf" },
            { title: "Cardiometabolic-challenges-Module", image: "assets/service-detail/cms-courses/boston-university/Cardiometabolic-challenges-Module.jpg", file: "assets/service-detail/cms-courses/boston-university/Cardiometabolic-challenges-Module.pdf" },
            { title: "Excellence-program-on-ACS", image: "assets/service-detail/cms-courses/boston-university/Excellence-program-on-ACS.jpg", file: "assets/service-detail/cms-courses/boston-university/Excellence-program-on-ACS.pdf" },
            { title: "Wound-Management-CME", image: "assets/service-detail/cms-courses/boston-university/Wound-Management-CME.jpg", file: "assets/service-detail/cms-courses/boston-university/Wound-Management-CME.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#Cleveland-Clinics-RCP");
        const jsonData = [
            { title: "Critical-Cardiiology-Module", image: "assets/service-detail/cms-courses/cleveland-clinics/Critical-Cardiiology-Module.jpg", file: "assets/service-detail/cms-courses/cleveland-clinics/Critical-Cardiiology-Module.pdf" },
            { title: "Hypertension-Webinar", image: "assets/service-detail/cms-courses/cleveland-clinics/Hypertension-Webinar.jpg", file: "assets/service-detail/cms-courses/cleveland-clinics/Hypertension-Webinar.pdf" },
            { title: "Program-brochure-press", image: "assets/service-detail/cms-courses/cleveland-clinics/Program-brochure-press.jpg", file: "assets/service-detail/cms-courses/cleveland-clinics/Program-brochure-press.pdf" },
            { title: "Anemia-of-CKD-CME-Module", image: "assets/service-detail/cms-courses/cleveland-clinics/Anemia-of-CKD-CME-Module.jpg", file: "assets/service-detail/cms-courses/cleveland-clinics/Anemia-of-CKD-CME-Module.pdf" },
            { title: "Cardio-conference-Summary", image: "assets/service-detail/cms-courses/cleveland-clinics/Cardio-conference-Summary.jpg", file: "assets/service-detail/cms-courses/cleveland-clinics/Cardio-conference-Summary.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#ifdfdAme");
        const jsonData = [
            { title: "Diabetes-CME", image: "assets/service-detail/cms-courses/IFDCD/Diabetes-CME.jpg", file: "assets/service-detail/cms-courses/IFDCD/Diabetes-CME.pdf" },
            { title: "Epilepsy-CME-Press", image: "assets/service-detail/cms-courses/IFDCD/Epilepsy-CME-Press.jpg", file: "assets/service-detail/cms-courses/IFDCD/Epilepsy-CME-Press.pdf" },
            { title: "Fever-management-webinar", image: "assets/service-detail/cms-courses/IFDCD/Fever-management-webinar.jpg", file: "assets/service-detail/cms-courses/IFDCD/Fever-management-webinar.pdf" },
            { title: "Hypertension-CME-Module", image: "assets/service-detail/cms-courses/IFDCD/Hypertension-CME-Module.jpg", file: "assets/service-detail/cms-courses/IFDCD/Hypertension-CME-Module.pdf" },
            { title: "IFDCD-Module-1823", image: "assets/service-detail/cms-courses/IFDCD/IFDCD-Module-1823.jpg", file: "assets/service-detail/cms-courses/IFDCD/IFDCD-Module-1823.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#customizedReprints");
        const jsonData = [
            { title: "ENTECAVIR-LBL", image: "assets/service-detail/brand-promotion/customized-reprints/ENTECAVIR-LBL.jpg", file: "assets/service-detail/brand-promotion/customized-reprints/ENTECAVIR-LBL.pdf" },
            { title: "Hepatitis-B-Spectacles-Issue-3", image: "assets/service-detail/brand-promotion/customized-reprints/Hepatitis-B-Spectacles-Issue-3.jpg", file: "assets/service-detail/brand-promotion/customized-reprints/Hepatitis-B-Spectacles-Issue-3.pdf" },
            { title: "Melzap-issue-3-FINAL", image: "assets/service-detail/brand-promotion/customized-reprints/Melzap-issue-3-FINAL.jpg", file: "assets/service-detail/brand-promotion/customized-reprints/Melzap-issue-3-FINAL.pdf" },
            { title: "Moringa-oleifera", image: "assets/service-detail/brand-promotion/customized-reprints/Moringa-oleifera.jpg", file: "assets/service-detail/brand-promotion/customized-reprints/Moringa-oleifera.pdf" },
            { title: "Revgrey-Grey-Derma-Insights-Issue", image: "assets/service-detail/brand-promotion/customized-reprints/Revgrey-Grey-Derma-Insights-Issue.jpg", file: "assets/service-detail/brand-promotion/customized-reprints/Revgrey-Grey-Derma-Insights-Issue.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#customizedLbls");
        const jsonData = [
            { title: "Neuropathy-Times-Issue-2", image: "assets/service-detail/brand-promotion/customized-LBLs/Neuropathy-Times-Issue-2.jpg", file: "assets/service-detail/brand-promotion/customized-LBLs/Neuropathy-Times-Issue-2.pdf" },
            { title: "Red-Bulletin-Issue-1", image: "assets/service-detail/brand-promotion/customized-LBLs/Red-Bulletin-Issue-1.jpg", file: "assets/service-detail/brand-promotion/customized-LBLs/Red-Bulletin-Issue-1.pdf" },
            { title: "Sunblock-Clinical-Trial-Issue", image: "assets/service-detail/brand-promotion/customized-LBLs/Sunblock-Clinical-Trial-Issue.jpg", file: "assets/service-detail/brand-promotion/customized-LBLs/Sunblock-Clinical-Trial-Issue.pdf" },
            { title: "Cardiology-newsletter-issue", image: "assets/service-detail/brand-promotion/customized-LBLs/Cardiology-newsletter-issue.jpg", file: "assets/service-detail/brand-promotion/customized-LBLs/Cardiology-newsletter-issue.pdf" },
            { title: "Hemophilia-Newsletter", image: "assets/service-detail/brand-promotion/customized-LBLs/Hemophilia-Newsletter.jpg", file: "assets/service-detail/brand-promotion/customized-LBLs/Hemophilia-Newsletter.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#customizedBooklets");
        const jsonData = [
            { title: "Cardiac-inflammation", image: "assets/service-detail/brand-promotion/customized-booklets/Cardiac-inflammation.jpg", file: "assets/service-detail/brand-promotion/customized-booklets/Cardiac-inflammation.pdf" },
            { title: "Cough-Insights-Issue", image: "assets/service-detail/brand-promotion/customized-booklets/Cough-Insights-Issue.jpg", file: "assets/service-detail/brand-promotion/customized-booklets/Cough-Insights-Issue.pdf" },
            { title: "Duphaston-Digest-Issue", image: "assets/service-detail/brand-promotion/customized-booklets/Duphaston-Digest-Issue.jpg", file: "assets/service-detail/brand-promotion/customized-booklets/Duphaston-Digest-Issue.pdf" },
            { title: "Isotretinoin-Guidelines-booklet", image: "assets/service-detail/brand-promotion/customized-booklets/Isotretinoin-Guidelines-booklet.jpg", file: "assets/service-detail/brand-promotion/customized-booklets/Isotretinoin-Guidelines-booklet.pdf" },
            { title: "Pain-Management_Issue-2", image: "assets/service-detail/brand-promotion/customized-booklets/Pain-Management_Issue-2.jpg", file: "assets/service-detail/brand-promotion/customized-booklets/Pain-Management_Issue-2.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#customizedProductPosters");
        const jsonData = [
            { title: "Confidence-booster-on-Epilepsy-issue", image: "assets/service-detail/brand-promotion/customized-product-posters/Confidence-booster-on-Epilepsy-issue.jpg", file: "assets/service-detail/brand-promotion/customized-product-posters/Confidence-booster-on-Epilepsy-issue.pdf" },
            { title: "IndoCap-Tent-Card-issue", image: "assets/service-detail/brand-promotion/customized-product-posters/IndoCap-Tent-Card-issue.jpg", file: "assets/service-detail/brand-promotion/customized-product-posters/IndoCap-Tent-Card-issue.pdf" },
            { title: "Oral-Zinc-for-Warts-Poster", image: "assets/service-detail/brand-promotion/customized-product-posters/Oral-Zinc-for-Warts-Poster.jpg", file: "assets/service-detail/brand-promotion/customized-product-posters/Oral-Zinc-for-Warts-Poster.pdf" },
            { title: "Pirfenex-reminder-card-issue", image: "assets/service-detail/brand-promotion/customized-product-posters/Pirfenex-reminder-card-issue.jpg", file: "assets/service-detail/brand-promotion/customized-product-posters/Pirfenex-reminder-card-issue.pdf" },
            { title: "Rosuvastatin-LBL-issue", image: "assets/service-detail/brand-promotion/customized-product-posters/Rosuvastatin-LBL-issue.jpg", file: "assets/service-detail/brand-promotion/customized-product-posters/Rosuvastatin-LBL-issue.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#infographicLbls");
        const jsonData = [
            { title: "Bladmir-Times-Issue", image: "assets/service-detail/brand-promotion/infographic-LBLs/Bladmir-Times-Issue.jpg", file: "assets/service-detail/brand-promotion/infographic-LBLs/Bladmir-Times-Issue.pdf" },
            { title: "Debate-Series-5-press", image: "assets/service-detail/brand-promotion/infographic-LBLs/Debate-Series-5-press.jpg", file: "assets/service-detail/brand-promotion/infographic-LBLs/Debate-Series-5-press.pdf" },
            { title: "Febuxostat-LBL", image: "assets/service-detail/brand-promotion/infographic-LBLs/Febuxostat-LBL.jpg", file: "assets/service-detail/brand-promotion/infographic-LBLs/Febuxostat-LBL.pdf" },
            { title: "Lilituf-Debate-Issue-press", image: "assets/service-detail/brand-promotion/infographic-LBLs/Lilituf-Debate-Issue-press.jpg", file: "assets/service-detail/brand-promotion/infographic-LBLs/Lilituf-Debate-Issue-press.pdf" },
            { title: "Autobiography-on-Zinc-press", image: "assets/service-detail/brand-promotion/infographic-LBLs/Autobiography-on-Zinc-press.jpg", file: "assets/service-detail/brand-promotion/infographic-LBLs/Autobiography-on-Zinc-press.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#kolEndosements");
        const jsonData = [
            { title: "Acnovate-trio-gel-issue", image: "assets/service-detail/brand-promotion/KOL-endorsements/Acnovate-trio-gel-issue.jpg", file: "assets/service-detail/brand-promotion/KOL-endorsements/Acnovate-trio-gel-issue.pdf" },
            { title: "Acotop-ER-Issue", image: "assets/service-detail/brand-promotion/KOL-endorsements/Acotop-ER-Issue.jpg", file: "assets/service-detail/brand-promotion/KOL-endorsements/Acotop-ER-Issue.pdf" },
            { title: "PRUCROS-Kol-case", image: "assets/service-detail/brand-promotion/KOL-endorsements/PRUCROS-Kol-case.jpg", file: "assets/service-detail/brand-promotion/KOL-endorsements/PRUCROS-Kol-case.pdf" },
            { title: "Vidagliptin-case-issue", image: "assets/service-detail/brand-promotion/KOL-endorsements/Vidagliptin-case-issue.jpg", file: "assets/service-detail/brand-promotion/KOL-endorsements/Vidagliptin-case-issue.pdf" },
            { title: "Zinc-KoL-Series", image: "assets/service-detail/brand-promotion/KOL-endorsements/Zinc-KoL-Series.jpg", file: "assets/service-detail/brand-promotion/KOL-endorsements/Zinc-KoL-Series.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#subjectMatterExpertise");
        const jsonData = [
            { title: "Tenfoclear-product-monograph", image: "assets/service-detail/brand-promotion/subject-matter-expertise/Tenfoclear-product-monograph.jpg", file: "assets/service-detail/brand-promotion/subject-matter-expertise/Tenfoclear-product-monograph.pdf" },
            { title: "EHL-NEWSLETTER-ISSUE", image: "assets/service-detail/brand-promotion/subject-matter-expertise/EHL-NEWSLETTER-ISSUE.jpg", file: "assets/service-detail/brand-promotion/subject-matter-expertise/EHL-NEWSLETTER-ISSUE.pdf" },
            { title: "Fever-management-webinar", image: "assets/service-detail/brand-promotion/subject-matter-expertise/Fever-management-webinar.jpg", file: "assets/service-detail/brand-promotion/subject-matter-expertise/Fever-management-webinar.pdf" },
            { title: "IFDCD-Module", image: "assets/service-detail/brand-promotion/subject-matter-expertise/IFDCD-Module.jpg", file: "assets/service-detail/brand-promotion/subject-matter-expertise/IFDCD-Module.pdf" },
            { title: "MOX-CV-LBL", image: "assets/service-detail/brand-promotion/subject-matter-expertise/MOX-CV-LBL.jpg", file: "assets/service-detail/brand-promotion/subject-matter-expertise/MOX-CV-LBL.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#digitalDetailAids");
        const jsonData = [
            { title: "NIZORAL-NEWSLETTER-ISSUE", image: "assets/service-detail/digital-social-media/digital-detail-aids/NIZORAL-NEWSLETTER-ISSUE.jpg", file: "assets/service-detail/digital-social-media/digital-detail-aids/NIZORAL-NEWSLETTER-ISSUE.pdf" },
            { title: "Pylera", image: "assets/service-detail/digital-social-media/digital-detail-aids/Pylera.jpg", file: "assets/service-detail/digital-social-media/digital-detail-aids/Pylera.pdf" },
            { title: "Venoactive-LBL", image: "assets/service-detail/digital-social-media/digital-detail-aids/Venoactive-LBL.jpg", file: "assets/service-detail/digital-social-media/digital-detail-aids/Venoactive-LBL.pdf" },
            { title: "Cotrax", image: "assets/service-detail/digital-social-media/digital-detail-aids/Cotrax.jpg", file: "assets/service-detail/digital-social-media/digital-detail-aids/Cotrax.pdf" },
            { title: "Malnutrition-in-hospitalized-patients", image: "assets/service-detail/digital-social-media/digital-detail-aids/Malnutrition-in-hospitalized-patients.jpg", file: "assets/service-detail/digital-social-media/digital-detail-aids/Malnutrition-in-hospitalized-patients.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#interactiveVideos");
        const jsonData = [
            { title: "Dermakonnect-AV", image: "assets/service-detail/digital-social-media/interactive-videos/Dermakonnect-AV.jpg", file: "assets/service-detail/digital-social-media/interactive-videos/Dermakonnect-AV.mp4" },
            { title: "Dr-Sanjiv-Kandhari", image: "assets/service-detail/digital-social-media/interactive-videos/Dr-Sanjiv-Kandhari.jpg", file: "assets/service-detail/digital-social-media/interactive-videos/Dr-Sanjiv-Kandhari.m4v" },
            { title: "TofacitinibOintmentIssue", image: "assets/service-detail/digital-social-media/interactive-videos/TofacitinibOintmentIssue.jpg", file: "assets/service-detail/digital-social-media/interactive-videos/TofacitinibOintmentIssue.mp4" },
            { title: "ApremilastIssue-AV", image: "assets/service-detail/digital-social-media/interactive-videos/ApremilastIssue-AV.jpg", file: "assets/service-detail/digital-social-media/interactive-videos/ApremilastIssue-AV.m4v" },
            { title: "AV-Induction-of-Labor", image: "assets/service-detail/digital-social-media/interactive-videos/AV-Induction-of-Labor.jpg", file: "assets/service-detail/digital-social-media/interactive-videos/AV-Induction-of-Labor.mp4" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#2d3dAnimation");
        const jsonData = [
            { title: "Allergic-Rhinitis-AV1", image: "assets/service-detail/digital-social-media/2D3D-animations/Allergic-Rhinitis-AV1.jpg", file: "assets/service-detail/digital-social-media/2D3D-animations/Allergic-Rhinitis-AV1.m4v" },
            { title: "I-Rinse-Nasal-spray-AV", image: "assets/service-detail/digital-social-media/2D3D-animations/I-Rinse-Nasal-spray-AV.jpg", file: "assets/service-detail/digital-social-media/2D3D-animations/I-Rinse-Nasal-spray-AV.m4v" },
            { title: "Prohance-AV1", image: "assets/service-detail/digital-social-media/2D3D-animations/Prohance-AV1.jpg", file: "assets/service-detail/digital-social-media/2D3D-animations/Prohance-AV1.mp4" },
            { title: "Synchrobreathe", image: "assets/service-detail/digital-social-media/2D3D-animations/Synchrobreathe.jpg", file: "assets/service-detail/digital-social-media/2D3D-animations/Synchrobreathe.m4v" },
            { title: "Vehycal-XT-AV", image: "assets/service-detail/digital-social-media/2D3D-animations/Vehycal-XT-AV.jpg", file: "assets/service-detail/digital-social-media/2D3D-animations/Vehycal-XT-AV.m4v" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#whiteBoardAnimation");
        const jsonData = [
            { title: "GRIPHON-trial", image: "assets/service-detail/digital-social-media/white-board-animations/GRIPHON-trial.jpg", file: "assets/service-detail/digital-social-media/white-board-animations/GRIPHON-trial.m4v" },
            { title: "HIRUDOID-AV2", image: "assets/service-detail/digital-social-media/white-board-animations/HIRUDOID-AV2.jpg", file: "assets/service-detail/digital-social-media/white-board-animations/HIRUDOID-AV2.m4v" },
            { title: "Mechanism-of-action", image: "assets/service-detail/digital-social-media/white-board-animations/Mechanism-of-action.jpg", file: "assets/service-detail/digital-social-media/white-board-animations/Mechanism-of-action.m4v" },
            { title: "TRITON-trial", image: "assets/service-detail/digital-social-media/white-board-animations/TRITON-trial.jpg", file: "assets/service-detail/digital-social-media/white-board-animations/TRITON-trial.m4v" },
            { title: "Allergic-Rhinitis-AV", image: "assets/service-detail/digital-social-media/white-board-animations/Allergic-Rhinitis-AV.jpg", file: "assets/service-detail/digital-social-media/white-board-animations/Allergic-Rhinitis-AV.m4v" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#productVideos");
        const jsonData = [
            { title: "NIDOS-AF", image: "assets/service-detail/digital-social-media/product-videos/NIDOS-AF.jpg", file: "assets/service-detail/digital-social-media/product-videos/NIDOS-AF.mp4" },
            { title: "Nizoral-AV", image: "assets/service-detail/digital-social-media/product-videos/Nizoral-AV.jpg", file: "assets/service-detail/digital-social-media/product-videos/Nizoral-AV.mp4" },
            { title: "Nokver-AV", image: "assets/service-detail/digital-social-media/product-videos/Nokver-AV.jpg", file: "assets/service-detail/digital-social-media/product-videos/Nokver-AV.mp4" },
            { title: "Proenzi-Detailer-AV12623", image: "assets/service-detail/digital-social-media/product-videos/Proenzi-Detailer-AV12623.jpg", file: "assets/service-detail/digital-social-media/product-videos/Proenzi-Detailer-AV12623.m4v" },
            { title: "Venoruton-AV1", image: "assets/service-detail/digital-social-media/product-videos/Venoruton-AV1.jpg", file: "assets/service-detail/digital-social-media/product-videos/Venoruton-AV1.m4v" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#flipCharts");
        const jsonData = [
            { title: "ENT-Flipchart-press", image: "assets/service-detail/patient-education/flip-charts/ENT-Flipchart-press.jpg", file: "assets/service-detail/patient-education/flip-charts/ENT-Flipchart-press.pdf" },
            { title: "Heart-Failure-flipchart", image: "assets/service-detail/patient-education/flip-charts/Heart-Failure-flipchart.jpg", file: "assets/service-detail/patient-education/flip-charts/Heart-Failure-flipchart.pdf" },
            { title: "IBS-Flipchart", image: "assets/service-detail/patient-education/flip-charts/IBS-Flipchart.jpg", file: "assets/service-detail/patient-education/flip-charts/IBS-Flipchart.pdf" },
            { title: "Tinea-Flip-Chart", image: "assets/service-detail/patient-education/flip-charts/Tinea-Flip-Chart.jpg", file: "assets/service-detail/patient-education/flip-charts/Tinea-Flip-Chart.pdf" },
            { title: "Antifungal-Flip-Chart_Press", image: "assets/service-detail/patient-education/flip-charts/Antifungal-Flip-Chart_Press.jpg", file: "assets/service-detail/patient-education/flip-charts/Antifungal-Flip-Chart_Press.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#tearOffPad");
        const jsonData = [
            { title: "Osteoarthritis-Flip-chart-press_25-8-18", image: "assets/service-detail/patient-education/tear-offs-pad/Osteoarthritis-Flip-chart-press_25-8-18.jpg", file: "assets/service-detail/patient-education/tear-offs-pad/Osteoarthritis-Flip-chart-press_25-8-18.pdf" },
            { title: "UTI-Dos-and-dont-Hindi", image: "assets/service-detail/patient-education/tear-offs-pad/UTI-Dos-and-dont-Hindi.jpg", file: "assets/service-detail/patient-education/tear-offs-pad/UTI-Dos-and-dont-Hindi.pdf" },
            { title: "Vivamom-Diet-chart-Tear-off-Pads", image: "assets/service-detail/patient-education/tear-offs-pad/Vivamom-Diet-chart-Tear-off-Pads.jpg", file: "assets/service-detail/patient-education/tear-offs-pad/Vivamom-Diet-chart-Tear-off-Pads.pdf" },
            { title: "BREAST-CANCER", image: "assets/service-detail/patient-education/tear-offs-pad/BREAST-CANCER.jpg", file: "assets/service-detail/patient-education/tear-offs-pad/BREAST-CANCER.pdf" },
            { title: "Equirex-Tear-off-pads", image: "assets/service-detail/patient-education/tear-offs-pad/Equirex-Tear-off-pads.jpg", file: "assets/service-detail/patient-education/tear-offs-pad/Equirex-Tear-off-pads.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#themeBasedPosters");
        const jsonData = [
            { title: "Antifungals-poster_HI-press", image: "assets/service-detail/patient-education/theme-based-posters/Antifungals-poster_HI-press.jpg", file: "assets/service-detail/patient-education/theme-based-posters/Antifungals-poster_HI-press.pdf" },
            { title: "Oral-Zinc-for-Warts-Poster-press", image: "assets/service-detail/patient-education/theme-based-posters/Oral-Zinc-for-Warts-Poster-press.jpg", file: "assets/service-detail/patient-education/theme-based-posters/Oral-Zinc-for-Warts-Poster-press.pdf" },
            { title: "PAH-poster_HI-Final_19-4-23", image: "assets/service-detail/patient-education/theme-based-posters/PAH-poster_HI-Final_19-4-23.jpg", file: "assets/service-detail/patient-education/theme-based-posters/PAH-poster_HI-Final_19-4-23.pdf" },
            { title: "Press_PMS-poster_English", image: "assets/service-detail/patient-education/theme-based-posters/Press_PMS-poster_English.jpg", file: "assets/service-detail/patient-education/theme-based-posters/Press_PMS-poster_English.pdf" },
            { title: "Pressure-Ulcear-poster", image: "assets/service-detail/patient-education/theme-based-posters/Pressure-Ulcear-poster.jpg", file: "assets/service-detail/patient-education/theme-based-posters/Pressure-Ulcear-poster.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#comicBooks");
        const jsonData = [
            { title: "Autobiography-of-Azisartan-Issue", image: "assets/service-detail/patient-education/comic-books/Autobiography-of-Azisartan-Issue.jpg", file: "assets/service-detail/patient-education/comic-books/Autobiography-of-Azisartan-Issue.pdf" },
            { title: "Autobiography-of-Oxiconazole-issue", image: "assets/service-detail/patient-education/comic-books/Autobiography-of-Oxiconazole-issue.jpg", file: "assets/service-detail/patient-education/comic-books/Autobiography-of-Oxiconazole-issue.pdf" },
            { title: "Autobiography-of-Sertraline-Issue", image: "assets/service-detail/patient-education/comic-books/Autobiography-of-Sertraline-Issue.jpg", file: "assets/service-detail/patient-education/comic-books/Autobiography-of-Sertraline-Issue.pdf" },
            { title: "Press_Autobiography-Sertaconazole", image: "assets/service-detail/patient-education/comic-books/Press_Autobiography-Sertaconazole.jpg", file: "assets/service-detail/patient-education/comic-books/Press_Autobiography-Sertaconazole.pdf" },
            { title: "Vision-booklet", image: "assets/service-detail/patient-education/comic-books/Vision-booklet.jpg", file: "assets/service-detail/patient-education/comic-books/Vision-booklet.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#healthAwareness");
        const jsonData = [
            { title: "Better-diabetic-foot-care", image: "assets/service-detail/patient-education/health-awareness/Better-diabetic-foot-care.jpg", file: "assets/service-detail/patient-education/health-awareness/Better-diabetic-foot-care.pdf" },
            { title: "Glimpses-of-Diabetes-press", image: "assets/service-detail/patient-education/health-awareness/Glimpses-of-Diabetes-press.jpg", file: "assets/service-detail/patient-education/health-awareness/Glimpses-of-Diabetes-press.pdf" },
            { title: "Glimpses-of-Hypertension", image: "assets/service-detail/patient-education/health-awareness/Glimpses-of-Hypertension.jpg", file: "assets/service-detail/patient-education/health-awareness/Glimpses-of-Hypertension.pdf" },
            { title: "National-hair-loss-aqareness-LBL", image: "assets/service-detail/patient-education/health-awareness/National-hair-loss-aqareness-LBL.jpg", file: "assets/service-detail/patient-education/health-awareness/National-hair-loss-aqareness-LBL.pdf" },
            { title: "PREGNANCY", image: "assets/service-detail/patient-education/health-awareness/PREGNANCY.jpg", file: "assets/service-detail/patient-education/health-awareness/PREGNANCY.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#conferenceOrganizing");
        const jsonData = [
            { title: "Emerging-Infectious-Disease", image: "assets/service-detail/international-conferences/conference-organizing/Emerging-Infectious-Disease.jpg", file: "assets/service-detail/international-conferences/conference-organizing/Emerging-Infectious-Disease.pdf" },
            { title: "Epilepsy-conclave-2016", image: "assets/service-detail/international-conferences/conference-organizing/Epilepsy-conclave-2016.jpg", file: "assets/service-detail/international-conferences/conference-organizing/Epilepsy-conclave-2016.pdf" },
            { title: "Program-Brochure", image: "assets/service-detail/international-conferences/conference-organizing/Program-Brochure.jpg", file: "assets/service-detail/international-conferences/conference-organizing/Program-Brochure.pdf" },
            { title: "Program-brochure-2", image: "assets/service-detail/international-conferences/conference-organizing/Program-brochure-2.jpg", file: "assets/service-detail/international-conferences/conference-organizing/Program-brochure-2.pdf" },
            { title: "WEBINAR-VIDEO-LINK", image: "assets/service-detail/international-conferences/conference-organizing/WEBINAR-VIDEO-LINK.jpg", file: "assets/service-detail/international-conferences/conference-organizing/WEBINAR-VIDEO-LINK.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#conferenceCoverage");
        const jsonData = [
            { title: "ASN-Conf-Compendium-Kidney", image: "assets/service-detail/international-conferences/conference-coverage/ASN-Conf-Compendium-Kidney.jpg", file: "assets/service-detail/international-conferences/conference-coverage/ASN-Conf-Compendium-Kidney.pdf" },
            { title: "ATS-Conference-highlights-2019", image: "assets/service-detail/international-conferences/conference-coverage/ATS-Conference-highlights-2019.jpg", file: "assets/service-detail/international-conferences/conference-coverage/ATS-Conference-highlights-2019.pdf" },
            { title: "Conference-Abstracts_ATTD", image: "assets/service-detail/international-conferences/conference-coverage/Conference-Abstracts_ATTD.jpg", file: "assets/service-detail/international-conferences/conference-coverage/Conference-Abstracts_ATTD.pdf" },
            { title: "Derma-conference-compendium", image: "assets/service-detail/international-conferences/conference-coverage/Derma-conference-compendium.jpg", file: "assets/service-detail/international-conferences/conference-coverage/Derma-conference-compendium.pdf" },
            { title: "Dermatek_Conference-Compendium", image: "assets/service-detail/international-conferences/conference-coverage/Dermatek_Conference-Compendium.jpg", file: "assets/service-detail/international-conferences/conference-coverage/Dermatek_Conference-Compendium.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#seminarsWebinars");
        const jsonData = [
            { title: "Antimicrobial-webinar-Newsletter", image: "assets/service-detail/international-conferences/seminars-webinars/Antimicrobial-webinar-Newsletter.jpg", file: "assets/service-detail/international-conferences/seminars-webinars/Antimicrobial-webinar-Newsletter.pdf" },
            { title: "Fever-management-webinar", image: "assets/service-detail/international-conferences/seminars-webinars/Fever-management-webinar.jpg", file: "assets/service-detail/international-conferences/seminars-webinars/Fever-management-webinar.pdf" },
            { title: "Myanmar-IFDCD-Module-2_26-12-23", image: "assets/service-detail/international-conferences/seminars-webinars/Myanmar-IFDCD-Module-2_26-12-23.jpg", file: "assets/service-detail/international-conferences/seminars-webinars/Myanmar-IFDCD-Module-2_26-12-23.pdf" },
            { title: "WEBINAR-PROGRAM-NURSES", image: "assets/service-detail/international-conferences/seminars-webinars/WEBINAR-PROGRAM-NURSES.jpg", file: "assets/service-detail/international-conferences/seminars-webinars/WEBINAR-PROGRAM-NURSES.pdf" },
            { title: "ACS-WEBINAR-4-e-NEWSLETTER", image: "assets/service-detail/international-conferences/seminars-webinars/ACS-WEBINAR-4-e-NEWSLETTER.jpg", file: "assets/service-detail/international-conferences/seminars-webinars/ACS-WEBINAR-4-e-NEWSLETTER.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#medicalBooks");
        const jsonData = [
            { title: "Derma-Book-press", image: "assets/service-detail/books/medical-books/Derma-Book-press.jpg", file: "assets/service-detail/books/medical-books/Derma-Book-press.pdf" },
            { title: "Phencyclopedia-press", image: "assets/service-detail/books/medical-books/Phencyclopedia-press.jpg", file: "assets/service-detail/books/medical-books/Phencyclopedia-press.pdf" },
            { title: "SEEDS-Issue", image: "assets/service-detail/books/medical-books/SEEDS-Issue.jpg", file: "assets/service-detail/books/medical-books/SEEDS-Issue.pdf" },
            { title: "Advances-in-Otorhinolaryngology-Issue", image: "assets/service-detail/books/medical-books/Advances-in-Otorhinolaryngology-Issue.jpg", file: "assets/service-detail/books/medical-books/Advances-in-Otorhinolaryngology-Issue.pdf" },
            { title: "Atlas-on-Tinea-Infections-press", image: "assets/service-detail/books/medical-books/Atlas-on-Tinea-Infections-press.jpg", file: "assets/service-detail/books/medical-books/Atlas-on-Tinea-Infections-press.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#dentalBooks");
        const jsonData = [
            { title: "ENDO-2016_10_3", image: "assets/service-detail/books/dental-books/ENDO-2016_10_3.jpg", file: "assets/service-detail/books/dental-books/ENDO-2016_10_3.pdf" },
            { title: "IJP-29_6_2016", image: "assets/service-detail/books/dental-books/IJP-29_6_2016.jpg", file: "assets/service-detail/books/dental-books/IJP-29_6_2016.pdf" },
            { title: "JAD_2015", image: "assets/service-detail/books/dental-books/JAD_2015.jpg", file: "assets/service-detail/books/dental-books/JAD_2015.pdf" },
            { title: "JOMI-27_6_2012", image: "assets/service-detail/books/dental-books/JOMI-27_6_2012.jpg", file: "assets/service-detail/books/dental-books/JOMI-27_6_2012.pdf" },
            { title: "PRESS_QI_JAN-FEB-2020", image: "assets/service-detail/books/dental-books/PRESS_QI_JAN-FEB-2020.jpg", file: "assets/service-detail/books/dental-books/PRESS_QI_JAN-FEB-2020.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#internationalJournals");
        const jsonData = [
            { title: "CVI", image: "assets/service-detail/journals/international-journals/CVI.jpg", file: "assets/service-detail/journals/international-journals/CVI.pdf" },
            { title: "Diabetes-Gate-Issue", image: "assets/service-detail/journals/international-journals/Diabetes-Gate-Issue.jpg", file: "assets/service-detail/journals/international-journals/Diabetes-Gate-Issue.pdf" },
            { title: "ESC-Spotlight_V1N2", image: "assets/service-detail/journals/international-journals/ESC-Spotlight_V1N2.jpg", file: "assets/service-detail/journals/international-journals/ESC-Spotlight_V1N2.pdf" },
            { title: "JPS-Issue-4_E-Dummy", image: "assets/service-detail/journals/international-journals/JPS-Issue-4_E-Dummy.jpg", file: "assets/service-detail/journals/international-journals/JPS-Issue-4_E-Dummy.pdf" },
            { title: "Macleoads_Issue_4_12Dec23-Bleed", image: "assets/service-detail/journals/international-journals/Macleoads_Issue_4_12Dec23-Bleed.jpg", file: "assets/service-detail/journals/international-journals/Macleoads_Issue_4_12Dec23-Bleed.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#indianJournals");
        const jsonData = [
            { title: "AME-Journal-in-Fever-Management-issue", image: "assets/service-detail/journals/indian-journals/AME-Journal-in-Fever-Management-issue.jpg", file: "assets/service-detail/journals/indian-journals/AME-Journal-in-Fever-Management-issue.pdf" },
            { title: "ECG-case-study-issue-press", image: "assets/service-detail/journals/indian-journals/ECG-case-study-issue-press.jpg", file: "assets/service-detail/journals/indian-journals/ECG-case-study-issue-press.pdf" },
            { title: "Mobility-journal-issue-press", image: "assets/service-detail/journals/indian-journals/Mobility-journal-issue-press.jpg", file: "assets/service-detail/journals/indian-journals/Mobility-journal-issue-press.pdf" },
            { title: "SEEDS-Issue", image: "assets/service-detail/journals/indian-journals/SEEDS-Issue.jpg", file: "assets/service-detail/journals/indian-journals/SEEDS-Issue.pdf" },
            { title: "Trichology-Issue-2-with-KOLs", image: "assets/service-detail/journals/indian-journals/Trichology-Issue-2-with-KOLs.jpg", file: "assets/service-detail/journals/indian-journals/Trichology-Issue-2-with-KOLs.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#monthlyJournals");
        const jsonData = [
            { title: "MU-July-2013", image: "assets/service-detail/medicine-update/monthly-journals/MU-July-2013.jpg", file: "assets/service-detail/medicine-update/monthly-journals/MU-July-2013.pdf" },
            { title: "MU-November_2023", image: "assets/service-detail/medicine-update/monthly-journals/MU-November_2023.jpg", file: "assets/service-detail/medicine-update/monthly-journals/MU-November_2023.pdf" },
            { title: "MU-October-2023", image: "assets/service-detail/medicine-update/monthly-journals/MU-October-2023.jpg", file: "assets/service-detail/medicine-update/monthly-journals/MU-October-2023.pdf" },
            { title: "MU-Aug-2019", image: "assets/service-detail/medicine-update/monthly-journals/MU-Aug-2019.jpg", file: "assets/service-detail/medicine-update/monthly-journals/MU-Aug-2019.pdf" },
            { title: "MU-December-2023", image: "assets/service-detail/medicine-update/monthly-journals/MU-December-2023.jpg", file: "assets/service-detail/medicine-update/monthly-journals/MU-December-2023.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#customizedMedicineReprints");
        const jsonData = [
            { title: "Apex-Reprint", image: "assets/service-detail/medicine-update/customized-reprints/Apex-Reprint.jpg", file: "assets/service-detail/medicine-update/customized-reprints/Apex-Reprint.pdf" },
            { title: "Azkera-MU-Reprint-Issue", image: "assets/service-detail/medicine-update/customized-reprints/Azkera-MU-Reprint-Issue.jpg", file: "assets/service-detail/medicine-update/customized-reprints/Azkera-MU-Reprint-Issue.pdf" },
            { title: "GINKGO-BILOBA-EXTRACT-ISSUE", image: "assets/service-detail/medicine-update/customized-reprints/GINKGO-BILOBA-EXTRACT-ISSUE.jpg", file: "assets/service-detail/medicine-update/customized-reprints/GINKGO-BILOBA-EXTRACT-ISSUE.pdf" },
            { title: "Jenburkt-Reprint", image: "assets/service-detail/medicine-update/customized-reprints/Jenburkt-Reprint.jpg", file: "assets/service-detail/medicine-update/customized-reprints/Jenburkt-Reprint.pdf" },
            { title: "Medicine-Update-Reprint-Issue", image: "assets/service-detail/medicine-update/customized-reprints/Medicine-Update-Reprint-Issue.jpg", file: "assets/service-detail/medicine-update/customized-reprints/Medicine-Update-Reprint-Issue.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#medicineUpdateCME");
        const jsonData = [
            { title: "Chronicles-of-cardiology-Module", image: "assets/service-detail/medicine-update/medicine-update-CME/Chronicles-of-cardiology-Module.jpg", file: "assets/service-detail/medicine-update/medicine-update-CME/Chronicles-of-cardiology-Module.pdf" },
            { title: "Diabetes-and-its-complications-CME-Module", image: "assets/service-detail/medicine-update/medicine-update-CME/Diabetes-and-its-complications-CME-Module.jpg", file: "assets/service-detail/medicine-update/medicine-update-CME/Diabetes-and-its-complications-CME-Module.pdf" },
            { title: "MU-Reprint_Dry-Cough-Survey", image: "assets/service-detail/medicine-update/medicine-update-CME/MU-Reprint_Dry-Cough-Survey.jpg", file: "assets/service-detail/medicine-update/medicine-update-CME/MU-Reprint_Dry-Cough-Survey.pdf" },
            { title: "Antibacterials-CME", image: "assets/service-detail/medicine-update/medicine-update-CME/Antibacterials-CME.jpg", file: "assets/service-detail/medicine-update/medicine-update-CME/Antibacterials-CME.pdf" },
            { title: "Antifungals-CME", image: "assets/service-detail/medicine-update/medicine-update-CME/Antifungals-CME.jpg", file: "assets/service-detail/medicine-update/medicine-update-CME/Antifungals-CME.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#periodicIssues");
        const jsonData = [
            { title: "DI-Vol-21-Number-3", image: "assets/service-detail/drug-index/periodic-issues/DI-Vol-21-Number-3.jpg", file: "assets/service-detail/drug-index/periodic-issues/DI-Vol-21-Number-3.pdf" },
            { title: "DI-Vol-21-Number-4", image: "assets/service-detail/drug-index/periodic-issues/DI-Vol-21-Number-4.jpg", file: "assets/service-detail/drug-index/periodic-issues/DI-Vol-21-Number-4.pdf" },
            { title: "Dental-Index_2017", image: "assets/service-detail/drug-index/periodic-issues/Dental-Index_2017.jpg", file: "assets/service-detail/drug-index/periodic-issues/Dental-Index_2017.pdf" },
            { title: "DI-Vol-21-Number-1", image: "assets/service-detail/drug-index/periodic-issues/DI-Vol-21-Number-1.jpg", file: "assets/service-detail/drug-index/periodic-issues/DI-Vol-21-Number-1.pdf" },
            { title: "DI-Vol-21-Number-2", image: "assets/service-detail/drug-index/periodic-issues/DI-Vol-21-Number-2.jpg", file: "assets/service-detail/drug-index/periodic-issues/DI-Vol-21-Number-2.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
    $(document).ready(function () {
        const items = $("#specialityIssues");
        const jsonData = [
            { title: "CARDIOLOGY_AJANTA-PHARMA", image: "assets/service-detail/drug-index/speciality-issues/CARDIOLOGY_AJANTA-PHARMA.jpg", file: "assets/service-detail/drug-index/speciality-issues/CARDIOLOGY_AJANTA-PHARMA.pdf" },
            { title: "DI_Urology-Index", image: "assets/service-detail/drug-index/speciality-issues/DI_Urology-Index.jpg", file: "assets/service-detail/drug-index/speciality-issues/DI_Urology-Index.pdf" },
            { title: "Drug-Drug-Interaction-Series", image: "assets/service-detail/drug-index/speciality-issues/Drug-Drug-Interaction-Series.jpg", file: "assets/service-detail/drug-index/speciality-issues/Drug-Drug-Interaction-Series.pdf" },
            { title: "Drug-Drug-Interaction-Series_nephrology", image: "assets/service-detail/drug-index/speciality-issues/Drug-Drug-Interaction-Series_nephrology.jpg", file: "assets/service-detail/drug-index/speciality-issues/Drug-Drug-Interaction-Series_nephrology.pdf" },
            { title: "ONCO-INDEX_J-J", image: "assets/service-detail/drug-index/speciality-issues/ONCO-INDEX_J-J.jpg", file: "assets/service-detail/drug-index/speciality-issues/ONCO-INDEX_J-J.pdf" },
        ];
        $.each(jsonData, function (index, item) {
            let appendHtml = htmlData(item, index);
            items.append(appendHtml);
        });
        items.slick(slickObj);
        items.on('click', '.modal-btn', function () {
            const index = $(this).data("target")?.split("-")?.[1];
            modalData(jsonData[index], index);
            const modal = $(`#${jsonData[index]?.title}`);
            modal.find('.modal-title').text(jsonData[index]?.title);
            modal.find('iframe').attr('src', jsonData[index]?.file);
            modal.modal('show');
        });
        $('body').on('click', '.modal .close', function () {
            const modal = $(this).closest('.modal');
            modal.find('iframe').attr('src', "");
            modal.modal('hide');
        });
    });
})(jQuery);