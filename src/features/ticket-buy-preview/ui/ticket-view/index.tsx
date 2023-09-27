import React from "react";
import { TicketPlace } from "../../../../shared/store/ticket/ticket";
import "./index.scss";
import { useTranslation } from "react-i18next";

export const TicketView = ({ row, place, price }: TicketPlace) => {
  const { t } = useTranslation();
  const preparedPrice = (price / 100).toFixed(2);
  return (
    <div className={"ticket-view"}>
      <div className={"ticket-view-row"}>
        {t("ticket_view.row", { row: row })}
      </div>
      <div className={"ticket-view-place"}>
        {t("ticket_view.place", { place: place })}
      </div>
      <div className={"ticket-view-price"}>
        {t("ticket_view.price", {
          price: t("common.price_with_currency", { price: preparedPrice }),
        })}
      </div>
    </div>
  );
};
