import { GetStaticProps } from "next";
import Link from "next/link";

import * as Component from '../../../styles/stylesDetailsContributors'

import ArrowLeft from '../../../assets/arrowToBack.svg'

import { Details } from "../../../components/Details";

import { getContributorById } from "../../../services/ContributorsService";

interface ContributorsDetailsProps {
    contributor: {
        id: number,
        name: string,
        email: string,
        phone: {
            ddd: string,
            ddi: string,
            number: string
        },
        document: {
            type: string
            number: string
        },
        birth_date: string,
        image: string,
        department: string,
        branch: string,
        role: string,
        status: string
    }
}


const ContributorsDetails = ({ contributor } : ContributorsDetailsProps)  => {

    return (
        <Component.Main>
            <Component.DivTitle>
                <Link href="/">
                    <Component.IconCircle>
                        <Component.IconToBack src={ArrowLeft.src} />
                    </Component.IconCircle>
                </Link>
                <Component.Title>Detalhes do colaborador</Component.Title>
            </Component.DivTitle>
            <Component.Box>
                <Details contributor={contributor} />
            </Component.Box>
        </Component.Main>
    )
}

export default ContributorsDetails


export const getStaticProps: GetStaticProps = async () => {
    const data = (await getContributorById(1)).agent

    return {
        props: {
            contributor: data
        },
        revalidate: 10
    }
}