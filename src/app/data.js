import iconTecnologia from "@/assets/icon-tecnologia.svg"
import iconReact from "@/assets/icon-react.svg"
import iconHtmlCss from "@/assets/icon-html-css.svg"
import post05 from "@/assets/img-post-topic-05.jpg"
import post04 from "@/assets/banner-react.jpg"
import imageLG from "@/assets/img-feature.jpg"

export const categorysLinks = [
    {
        path: '/categorias/tecnologia',
        icon: iconTecnologia,
        label: 'Tecnolgoia',
        altText: 'Ícone de código',
    },
    {
        path: '/categorias/react',
        icon: iconReact,
        label: 'ReactJS',
        altText: 'Ícone do React',
    },
    {
        path: '/categorias/html-css',
        icon: iconHtmlCss,
        label: 'HTML & CSS',
        altText: 'Ícone de CSS',
    },
]

export const postPopulars = [
    {
        category: 'HTML & CSS',
        title: 'Como montar um código semântico com no HTML?',
        date: '10, junho',
        reading: '1 min de leitura',
        image: imageLG,
        path: '/post/teste',
        alt: '',
    },
    {
        category: 'ReactJS',
        title: 'Trabalhando com Javascript e condições dentro do ReactJS',
        date: '10, junho',
        reading: '1 min de leitura',
        image: post04,
        path: '/post/teste',
        alt: '',
    },
    {
        category: 'Javascript',
        title: 'Trabalhando com CSS em conjunto com ReactJS',
        date: '10, junho',
        reading: '1 min de leitura',
        image: post05,
        path: '/post/teste',
        alt: '',
    },
]