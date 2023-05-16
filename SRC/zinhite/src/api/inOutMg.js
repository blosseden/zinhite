import { get, post } from './axios'
// ID카드
export const regIdCardAjax = async (params) => {
    const { status, data } = await post("/pvt/inOut/regIdCardAjax", params)

    if (status === 200 || status === 201) {
       return data
    }
}

export const getIdCardRsvListAjax = async (params) => {
    const { status, data } = await get("/pvt/inOut/getIdCardRsvListAjax", params)

    if (status === 200 || status === 201) {
        return data
    }
}

export const getIdCardDetailAjax = async (id) => {
    const { status, data } = await get("/pvt/inOut/getIdCardRsvDetailAjax?idCardRsvId=" + id)

    if (status === 200 || status === 201) {
       return data
    }
}

export const delIdCardRsvAjax = async (params) => {
    const { status, data } = await post("/pvt/inOut/delIdCardRsvAjax", params)

    if (status === 200 || status === 201) {
       return data
    }
}

export const updIdCardProposeCompAjax = async (params) => {
    const { status, data } = await post("/pvt/inOut/updIdCardProposeCompAjax", params)

    if (status === 200 || status === 201) {
       return data
    }
}

export const tempRegIdCardAjax = async (params) => {
    const { status, data } = await post("/pvt/inOut/tempRegIdCardAjax", params)

    if (status === 200 || status === 201) {
       return data
    }
}

export const regFileAjax = async (params) => {
    const { status, data } = await post("/pvt/common/regFileAjax", params, true)

    if (status === 200 || status === 201) {
       return data
    }
}

// 사옥출입
export const regBuildingIOAjax = async (params) => {
    const { status, data } = await post("/pvt/inOut/regInOutAjax", params)

    if (status === 200 || status === 201) {
       return data
    }
}

export const getBuildingIORsvListAjax = async (params) => {
    const { status, data } = await get("/pvt/inOut/getInOutListAjax", params)

    if (status === 200 || status === 201) {
        return data
    }
}

export const getBuildingIODetailAjax = async (id) => {
    const { status, data } = await get("/pvt/inOut/getInOutDetailAjax?idCardRsvId=" + id)

    if (status === 200 || status === 201) {
       return data
    }
}

export const updateInOutAjax = async (params) => {
    const { status, data } = await post("/pvt/inOut/updateInOutAjax", params)

    if (status === 200 || status === 201) {
       return data
    }
}

export const delInOutRsvAjax = async (params) => {
    const { status, data } = await post("/pvt/inOut/delInOutRsvAjax", params)

    if (status === 200 || status === 201) {
       return data
    }
}

// 관계사/협력사 출입
export const regBpIOjax = async (params) => {
    const { status, data } = await post("/pvt/inOut/regBpAjax", params)

    if (status === 200 || status === 201) {
       return data
    }
}

export const getBpIORsvListAjax = async (params) => {
    const { status, data } = await get("/pvt/inOut/getBpListAjax", params)

    if (status === 200 || status === 201) {
        return data
    }
}

export const getBpIODetailAjax = async (id) => {
    const { status, data } = await get("/pvt/inOut/getBpDetailAjax?idCardRsvId=" + id)

    if (status === 200 || status === 201) {
       return data
    }

}

//전자결제 호출
export const sendApprovalAjax = async (params) => {
    const { status, data } = await post("/pvt/approval/sendApprovalAjax", params)

    if (status === 200 || status === 201) {
       return data
    }
}

// 파일 업로드
export const uploadFilesAjax = async (params) => {
    const { status, data } = await post("/pvt/inOut/uploadFilesAjax", params)

    if (status === 200 || status === 201) {
       return data
    }
}
    