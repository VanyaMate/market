export interface IGoogleUser {
    id: string
    displayName: string
    name: IGoogleName
    emails: IGoogleEmail[]
    photos: IGooglePhoto[]
    provider: string
    _raw: string
    _json: IGoogleJson
}

export interface IGoogleName {
    familyName: string
    givenName: string
}

export interface IGoogleEmail {
    value: string
    verified: boolean
}

export interface IGooglePhoto {
    value: string
}

export interface IGoogleJson {
    sub: string
    name: string
    given_name: string
    family_name: string
    picture: string
    email: string
    email_verified: boolean
    locale: string
}
