import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";

import * as Component from './styles'

import ArrowLeft from '../../../assets/arrowToBack.svg'
import { Details } from "../../../components/Details";
import { getContributorById, getContributors } from "../../../services/ContributorsService";
import { Params } from "next/dist/server/router";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";

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


const ContributorsDetails = ({ contributor } : ContributorsDetailsProps) => {

    const { isFallback } = useRouter()

    if (isFallback) {
        return (
            <Component.Loading>
                <CircularProgress color="primary" />
            </Component.Loading>
        )
    }

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

export const getStaticPaths: GetStaticPaths = async () => {
    const data = (await getContributors()).items

    const paths = data.map(contributor => { return { params: { id: contributor.agent_id.toString(), } } })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
    const { id } = params
    const data = (await getContributorById(id)).agent
    console.log(data)

    return {
        props: {
            contributor: data
        },
        revalidate: 10
    }
}