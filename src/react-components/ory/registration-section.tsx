import React from "react"
import { UiNode } from "@ory/client"
import { gridStyle } from "../../theme"
import { Divider } from "../divider"
import { FilterFlowNodes } from "./filter-flow-nodes"
import { filterNodesByGroups } from "@ory/integrations/ui"

export type RegistrationSectionProps = {
  nodes: UiNode[]
}

export const RegistrationSection = ({
  nodes,
}: RegistrationSectionProps): JSX.Element | null => {
  const hasPassword =
    filterNodesByGroups({
      nodes,
      groups: "password",
      withoutDefaultGroup: true,
      withoutDefaultAttributes: true,
      attributes: "submit",
    }).length > 0

  return hasPassword ? (
    <div className={gridStyle({ gap: 32 })}>
      <Divider />

      <div className={gridStyle({ gap: 16 })}>
        <FilterFlowNodes
          filter={{
            nodes: nodes,
            groups: ["default", "password"],
            excludeAttributes: "submit",
          }}
        />
      </div>
      <FilterFlowNodes
        filter={{
          nodes: nodes,
          groups: ["password"],
          attributes: "submit",
        }}
      />
    </div>
  ) : null
}